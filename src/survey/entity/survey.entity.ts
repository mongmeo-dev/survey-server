import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityCommonFields } from '../../common/entity/entity-common.fields';

@Entity('surveys')
export class SurveyEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false, length: 100 })
  title: string;
  @Column(() => EntityCommonFields)
  commonFields: EntityCommonFields = new EntityCommonFields();
}