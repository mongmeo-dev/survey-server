import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { SurveyEntity } from './survey.entity';
import { EntityCommonFields } from '../../common/entity/entity-common.fields';

@Entity('questions')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false, length: 100 })
  question: string;
  @ManyToOne(() => QuestionEntity, { nullable: false })
  @JoinColumn({ name: 'survey_id' })
  survey: SurveyEntity;
  @Column(() => EntityCommonFields)
  commonFields: EntityCommonFields = new EntityCommonFields();
}