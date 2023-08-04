import { INewsletter } from 'models/newsletter'
import { NewsletterService } from 'services/newsletter'

export class NewsletterController {
  private newsletterService: NewsletterService

  constructor() {
    this.newsletterService = new NewsletterService()
  }

  public async subscribe(request: INewsletter): Promise<boolean> {
    return await this.newsletterService.subscribe(request)
  }
}
