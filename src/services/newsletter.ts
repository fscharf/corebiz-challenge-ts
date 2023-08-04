import { INewsletter } from 'models/newsletter'

interface INewsletterService {
  subscribe(request: INewsletter): Promise<boolean>
}

export class NewsletterService implements INewsletterService {
  public async subscribe(request: INewsletter): Promise<boolean> {
    // await httpClient.post('/newsletter', {
    //   name: request.name,
    //   email: request.email
    // })
    console.log(request)
    return true
  }
}
