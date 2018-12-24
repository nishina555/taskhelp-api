import { Task } from '../domain/models/Task'

export class CreateTask {
  private _taskRepository

  constructor(taskRepository) {
    this._taskRepository = taskRepository
  }

  execute(title: string, description: string) {
    let task = new Task(title, description)
    return this._taskRepository.persist(task)
  }
}
