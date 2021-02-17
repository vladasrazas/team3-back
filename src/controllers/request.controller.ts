import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RequestModel} from '../models';
import {RequestModelRepository} from '../repositories';

export class RequestController {
  constructor(
    @repository(RequestModelRepository)
    public requestModelRepository : RequestModelRepository,
  ) {}

  @post('/request')
  @response(200, {
    description: 'RequestModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(RequestModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RequestModel, {
            title: 'NewRequestModel',
            exclude: ['id'],
          }),
        },
      },
    })
    requestModel: Omit<RequestModel, 'id'>,
  ): Promise<RequestModel> {
    return this.requestModelRepository.create(requestModel);
  }

  @get('/request/count')
  @response(200, {
    description: 'RequestModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RequestModel) where?: Where<RequestModel>,
  ): Promise<Count> {
    return this.requestModelRepository.count(where);
  }

  @get('/request')
  @response(200, {
    description: 'Array of RequestModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RequestModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RequestModel) filter?: Filter<RequestModel>,
  ): Promise<RequestModel[]> {
    return this.requestModelRepository.find(filter);
  }

  @patch('/request')
  @response(200, {
    description: 'RequestModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RequestModel, {partial: true}),
        },
      },
    })
    requestModel: RequestModel,
    @param.where(RequestModel) where?: Where<RequestModel>,
  ): Promise<Count> {
    return this.requestModelRepository.updateAll(requestModel, where);
  }

  @get('/request/{id}')
  @response(200, {
    description: 'RequestModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RequestModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RequestModel, {exclude: 'where'}) filter?: FilterExcludingWhere<RequestModel>
  ): Promise<RequestModel> {
    return this.requestModelRepository.findById(id, filter);
  }

  @patch('/request/{id}')
  @response(204, {
    description: 'RequestModel PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RequestModel, {partial: true}),
        },
      },
    })
    requestModel: RequestModel,
  ): Promise<void> {
    await this.requestModelRepository.updateById(id, requestModel);
  }

  @put('/request/{id}')
  @response(204, {
    description: 'RequestModel PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() requestModel: RequestModel,
  ): Promise<void> {
    await this.requestModelRepository.replaceById(id, requestModel);
  }

  @del('/request/{id}')
  @response(204, {
    description: 'RequestModel DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.requestModelRepository.deleteById(id);
  }
}
