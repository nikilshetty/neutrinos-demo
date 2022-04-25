/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_wRKHN6156igZuwDN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wRKHN6156igZuwDN(bh) {
    try {
      bh = this.sd_64kr9FpFLORU3MPE(bh);
      //appendnew_next_sd_wRKHN6156igZuwDN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wRKHN6156igZuwDN');
    }
  }

  navigateToDetailsPages(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_c6lWvjdCH08ENltK(bh);
      //appendnew_next_navigateToDetailsPages
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nVCnzfXDMiH3hHNv');
    }
  }

  //appendnew_flow_listComponent_start

  sd_64kr9FpFLORU3MPE(bh) {
    try {
      this.page.blogs = undefined;
      bh = this.sd_MqGeMdQHDB4A7cdX(bh);
      //appendnew_next_sd_64kr9FpFLORU3MPE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_64kr9FpFLORU3MPE');
    }
  }

  sd_MqGeMdQHDB4A7cdX(bh) {
    try {
      const page = this.page;
      page.blogs = [
        {
          id: 1,
          title: 'AAA',
          description: 'HEllo',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'BBB',
          description: 'HEllo',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'CCC',
          description: 'HEllo',
          image: 'https://via.placeholder.com/150',
        },
      ];
      this.sd_ReLgIXbfp1adrbSs(bh);
      //appendnew_next_sd_MqGeMdQHDB4A7cdX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MqGeMdQHDB4A7cdX');
    }
  }

  sd_ReLgIXbfp1adrbSs(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.blogs);
      //appendnew_next_sd_ReLgIXbfp1adrbSs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ReLgIXbfp1adrbSs');
    }
  }

  sd_c6lWvjdCH08ENltK(bh) {
    try {
      const page = this.page;
      console.log(bh.input);
      bh = this.sessionStorage(bh);
      //appendnew_next_sd_c6lWvjdCH08ENltK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c6lWvjdCH08ENltK');
    }
  }

  sessionStorage(bh) {
    try {
      sessionStorage.setItem('selectedBlog', JSON.stringify(bh.input.event));
      bh = this.navigateTodetailPage(bh);
      //appendnew_next_sessionStorage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8iKMzQG0YgEHGjxX');
    }
  }

  async navigateTodetailPage(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.event.id }),
        ]);
      //appendnew_next_navigateTodetailPage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Aj86AnVyoRZkerhO');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_listComponent_Catch
}
