import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, HostParam, Body } from '@nestjs/common';
import { ControllerbasicsService } from './controllerbasics.service';
import { CreateHumanDto } from './dto/create-human.dto';

/**
 host property will require the incoming request to have the given host like -> localhost
 if some part of host is dynamic, that can be handled like this->  :account.localhost
 here account can be dynamic (mahir.localhost, jeevan.localhost ...)
 */

@Controller({path:"controllerbasics", host:":account.localhost"})
export class ControllerbasicsController {
  constructor(private readonly controllerservice: ControllerbasicsService) {}

  @Post()           //@HttpCode(200) to set at handler level
  create(@Body() human: CreateHumanDto): string{
    console.log(human);
    return "creates a human";
  }

  /*
    can provide route based on regex too, like /*man  (wildcard)
    @Req() provides the request with all the properties
    @Body(), @Query() are also available
    @Header("message","hey there") is set to the response obj
    @Redirect() to redirect, dynamically redirect by returning {url,statusCode}
   */

  @Get("host")   
  @Header("Cache-Control","none")             
  getHost(@HostParam("account") hostname:string){    
    return `the host is ${hostname}`;                         
  } 

  @Get("query")   
  @Header("Cache-Control","none")             
  getQuery(@Query() query:string){    
    return `the query data is ${query}` ;                         
  }
  
  @Get("gotonest")   
  @Header("Cache-Control","none")  
  @Redirect('https://nestjs.com', 301)           
  getNest(@Query() query:string){    
    return "this will not be visible" ;                         
  }

  @Get("async")
  async delay(): Promise<string>{
    return new Promise(function(res){
      setTimeout(() => {
        res("hey there");
      }, 4000);
    })
  }

}

