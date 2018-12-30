import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../repositories/ITaskRepository'

export class CreateTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute(title: string, description: string) {
    let task = new Task(title, description)
    return this.taskRepository.persist(task)
  }
}
