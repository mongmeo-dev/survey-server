import { BeforeUpdate, Column } from 'typeorm';
import { EntityStatusEnum } from './enumerate/entity-status.enum';
import dayjs from 'dayjs';

export class EntityCommonFields {
  @Column({ nullable: false, enum: EntityStatusEnum, default: EntityStatusEnum.IN_USE })
  status: EntityStatusEnum = EntityStatusEnum.IN_USE;
  @Column({ nullable: false, default: dayjs().toDate() })
  createdAt: Date = dayjs().toDate();
  @Column({ nullable: false, default: dayjs().toDate() })
  updatedAt: Date = dayjs().toDate();
  @Column({ nullable: true })
  deletedAt?: Date;

  delete() {
    this.status = EntityStatusEnum.DELETE;
    this.deletedAt = dayjs().toDate();
  }

  @BeforeUpdate()
  markAsUpdated() {
    this.updatedAt = dayjs().toDate();
  }
}