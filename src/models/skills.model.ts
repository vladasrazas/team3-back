import {Entity, model, property} from '@loopback/repository';

@model()
export class Skills extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  user_id: string;

  @property({
    type: 'string',
    required: true,
  })
  user_name: string;

  @property({
    type: 'string',
    required: true,
  })
  email_address: string;

  @property({
    type: 'string',
    required: true,
  })
  phone_number: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  skills_offered: string[];

  @property({
    type: 'boolean',
    required: true,
  })
  availability: boolean;

  @property({
    type: 'string',
    required: true,
  })
  profile_picture: string;


  constructor(data?: Partial<Skills>) {
    super(data);
  }
}

export interface SkillsRelations {
  // describe navigational properties here
}

export type SkillsWithRelations = Skills & SkillsRelations;
