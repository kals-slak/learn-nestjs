import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap, map } from 'rxjs';

@Injectable()
export class CleanupInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("before...");
    let before = Date.now();
    return next.handle()
    .pipe(
      tap(()=> console.log(`after ... ${Date.now() - before}ms`)),
      // map((data)=> "Im interceptor"),
    );
    // the handle() method returns an observable which is the resultant of the route handler
    // using which i can transform the post processed data
  }
}
