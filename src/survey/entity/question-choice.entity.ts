import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EntityCommonFields } from '../../common/entity/entity-common.fields';
import { JoinColumn } from 'typeorm/browser';
import { QuestionEntity } from './question.entity';

@Entity('question_choices')
export class QuestionChoiceEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false, length: 100 })
  value: string;
  @Column({ nullable: false })
  score: number;
  @ManyToOne(() => QuestionEntity, { nullable: false })
  @JoinColumn({ name: 'question_id' })
  question: QuestionEntity;
  @Column(() => EntityCommonFields)
  commonFields: EntityCommonFields = new EntityCommonFields();
}