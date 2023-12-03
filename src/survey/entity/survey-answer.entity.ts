import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SurveyEntity } from './survey.entity';
import { JoinColumn } from 'typeorm/browser';
import { EntityCommonFields } from '../../common/entity/entity-common.fields';
import { QuestionAnswerEntity } from './question-answer.entity';
import { QuestionChoiceEntity } from './question-choice.entity';

@Entity('survey_answers')
export class SurveyAnswerEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @ManyToOne(() => SurveyEntity, { nullable: false })
  @JoinColumn({ name: 'survey_id' })
  survey: SurveyEntity;
  @Column(() => EntityCommonFields)
  commonFields: EntityCommonFields = new EntityCommonFields();
  @OneToMany(() => QuestionAnswerEntity, 'surveyAnswer')
  questionChoices: QuestionChoiceEntity[] = [];
}