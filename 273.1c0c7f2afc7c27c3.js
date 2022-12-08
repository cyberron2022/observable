"use strict";(self.webpackChunkobservable_store=self.webpackChunkobservable_store||[]).push([[273],{3273:(M,h,n)=>{n.r(h),n.d(h,{CustomersModule:()=>w});var m=n(6895),b=n(4466),l=n(3329),t=n(8256),Z=n(5762),v=n(9646),f=n(2843),C=n(4004),a=n(262),d=n(3900),T=n(529);let g=(()=>{class r extends Z.C{constructor(e){super({trackStateHistory:!0}),this.http=e,this.apiUrl="api/customers"}fetchCustomers(){return this.http.get(this.apiUrl).pipe((0,C.U)(e=>(this.setState({customers:e,loading:!1},p.GetCustomers),console.log(this.stateHistory),e)),(0,a.K)(this.handleError))}getAll(){const e=this.getState();return e&&e.customers?(0,v.of)(e.customers):(this.setState({loading:!0},p.GetCustomers),this.fetchCustomers().pipe((0,a.K)(this.handleError)))}get(e){return this.getAll().pipe((0,C.U)(s=>{let i=s.filter(Q=>Q.id===e);const c=i&&i.length?i[0]:null;return c&&this.setState({customer:c},p.GetCustomer),c}),(0,a.K)(this.handleError))}add(e){return this.http.post(this.apiUrl,e).pipe((0,d.w)(s=>this.fetchCustomers()),(0,a.K)(this.handleError))}update(e){return this.http.put(this.apiUrl+"/"+e.id,e).pipe((0,d.w)(s=>this.fetchCustomers()),(0,a.K)(this.handleError))}delete(e){return this.http.delete(this.apiUrl+"/"+e).pipe((0,d.w)(()=>this.fetchCustomers()),(0,a.K)(this.handleError))}handleError(e){if(console.error("server error:",e),e.error instanceof Error){const s=e.error.message;return(0,f._)(()=>new Error(s))}return(0,f._)(()=>e||new Error("Server error"))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(T.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var p=(()=>{return(r=p||(p={})).GetCustomers="get_customers",r.GetCustomer="get_customer",p;var r})(),_=n(797);let y=(()=>{class r{constructor(){this._filter="",this.changed=new t.vpe}get filter(){return this._filter}set filter(e){this._filter=e,this.changed.emit(this.filter)}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-filter-textbox"]],inputs:{filter:"filter"},outputs:{changed:"changed"},decls:2,vars:1,consts:[["type","text",3,"value","input"]],template:function(e,s){1&e&&(t._uU(0," Filter: "),t.TgZ(1,"input",0),t.NdJ("input",function(c){return s.filter=c.target.value}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",s.filter))},encapsulation:2}),r})(),A=(()=>{class r{transform(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275pipe=t.Yjl({name:"capitalize",type:r,pure:!0}),r})();const U=function(r){return["/orders",r]},x=function(r){return["/customers",r]};function S(r,o){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"capitalize"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"td")(10,"a",6),t._uU(11,"Orders"),t.qZA()(),t.TgZ(12,"td")(13,"a",6),t._uU(14,"Edit"),t.qZA()()()),2&r){const e=o.$implicit,s=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,5,e.name)),t.xp6(3),t.Oqu(e.city),t.xp6(2),t.Oqu(t.Dn7(8,7,e.orderTotal,s.currencyCode,"symbol")),t.xp6(3),t.Q6J("routerLink",t.VKq(11,U,e.id)),t.xp6(3),t.Q6J("routerLink",t.VKq(13,x,e.id))}}function F(r,o){if(1&r&&(t.TgZ(0,"tr")(1,"td",3),t._uU(2,"\xa0"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"td",3),t._uU(7,"\xa0"),t.qZA()()),2&r){const e=t.oxw();t.xp6(4),t.hij(" ",t.Dn7(5,1,e.customersOrderTotal,e.currencyCode,"symbol")," ")}}function O(r,o){1&r&&(t.TgZ(0,"tr")(1,"td",7),t._uU(2,"No customers found"),t.qZA()())}let q=(()=>{class r{constructor(e){this.sorterService=e,this._customers=[],this.filteredCustomers=[],this.currencyCode="USD"}get customers(){return this._customers}set customers(e){e&&(this.filteredCustomers=this._customers=e,this.calculateOrders())}ngOnInit(){}calculateOrders(){this.customersOrderTotal=0,this.filteredCustomers.forEach(e=>{this.customersOrderTotal+=e.orderTotal})}filter(e){this.filteredCustomers=e?this.customers.filter(s=>s.name.toLowerCase().indexOf(e.toLowerCase())>-1||s.city.toLowerCase().indexOf(e.toLowerCase())>-1||s.orderTotal.toString().indexOf(e)>-1):this.customers,this.calculateOrders()}sort(e){this.sorterService.sort(this.filteredCustomers,e)}customerTrackBy(e,s){return s.id}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(_.X))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customers-list"]],inputs:{customers:"customers"},decls:19,vars:4,consts:[[3,"changed"],[1,"table","table-hover"],[3,"click"],["colspan","2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["colspan","4"]],template:function(e,s){1&e&&(t.TgZ(0,"app-filter-textbox",0),t.NdJ("changed",function(c){return s.filter(c)}),t.qZA(),t._UZ(1,"br")(2,"br"),t.TgZ(3,"table",1)(4,"thead")(5,"tr")(6,"th",2),t.NdJ("click",function(){return s.sort("name")}),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"th",2),t.NdJ("click",function(){return s.sort("city")}),t._uU(9,"City"),t.qZA(),t.TgZ(10,"th",2),t.NdJ("click",function(){return s.sort("orderTotal")}),t._uU(11,"Order Total"),t.qZA(),t.TgZ(12,"th",3),t._uU(13,"\xa0"),t.qZA()()(),t.YNc(14,S,15,15,"tr",4),t.YNc(15,F,8,5,"tr",5),t.YNc(16,O,3,0,"tr",5),t.qZA(),t._uU(17),t._UZ(18,"br")),2&e&&(t.xp6(14),t.Q6J("ngForOf",s.filteredCustomers),t.xp6(1),t.Q6J("ngIf",s.filteredCustomers&&s.filteredCustomers.length),t.xp6(1),t.Q6J("ngIf",!s.filteredCustomers||!s.filteredCustomers.length),t.xp6(1),t.hij("\nNumber of Customers: ",s.filteredCustomers.length,"\n"))},dependencies:[m.sg,m.O5,l.yS,y,m.H9,A],encapsulation:2}),r})();function E(r,o){if(1&r&&(t.TgZ(0,"div"),t._UZ(1,"app-customers-list",1),t.qZA()),2&r){const e=o.ngIf;t.xp6(1),t.Q6J("customers",e)}}let J=(()=>{class r{constructor(e){this.customersService=e,this.title="Customers"}ngOnInit(){this.getCustomers()}getCustomers(){this.customers$=this.customersService.getAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customers"]],decls:5,vars:4,consts:[[4,"ngIf"],[3,"customers"]],template:function(e,s){1&e&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t._UZ(2,"br"),t.YNc(3,E,2,1,"div",0),t.ALo(4,"async")),2&e&&(t.xp6(1),t.Oqu(s.title),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,2,s.customers$)))},dependencies:[m.O5,q,m.Ov],encapsulation:2}),r})();var u=n(433),k=function(){function r(){this._subs=[]}return r.prototype.add=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this._subs=this._subs.concat(o)},Object.defineProperty(r.prototype,"sink",{set:function(o){this._subs.push(o)},enumerable:!0,configurable:!0}),r.prototype.unsubscribe=function(){this._subs.forEach(function(o){return o&&function(r){return"function"==typeof r}(o.unsubscribe)&&o.unsubscribe()}),this._subs=[]},r}();function N(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.delete())}),t._uU(1,"Delete"),t.qZA()}}const I=[{path:"",component:J},{path:":id",component:(()=>{class r{constructor(e,s,i,c){this.customersService=e,this.router=s,this.formBuilder=i,this.route=c,this.customerForm=this.formBuilder.group({id:[0],name:["",u.kI.required],city:["",u.kI.required]}),this.subsink=new k}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.subsink.sink=this.customersService.get(e).subscribe(s=>{s&&(this.customer=s,this.customerForm.patchValue(this.customer))})}submit(){if(this.customerForm.valid){const e={...this.customer,...this.customerForm.value};e.id?this.update(e):this.add(e)}}add(e){this.subsink.sink=this.customersService.add(e).subscribe(()=>{this.navigateHome()})}delete(){this.subsink.sink=this.customersService.delete(this.customer.id).subscribe(()=>{this.navigateHome()})}update(e){this.subsink.sink=this.customersService.update(e).subscribe(()=>{this.navigateHome()})}navigateHome(){this.router.navigate(["/customers"])}ngOnDestroy(){this.subsink.unsubscribe()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(l.F0),t.Y36(u.qu),t.Y36(l.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customers-edit"]],decls:27,vars:6,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","formControlName","id","readonly","",1,"form-control"],["type","text","formControlName","name",1,"form-control"],[1,"alert","alert-danger",3,"hidden"],["for","alterEgo"],["type","text","formControlName","city",1,"form-control"],["type","button","class","btn btn-danger",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],["routerLink","/customers"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return s.submit()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Id"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",3),t._uU(10,"Name"),t.qZA(),t._UZ(11,"input",5),t.TgZ(12,"div",6),t._uU(13,"Name is required"),t.qZA()(),t.TgZ(14,"div",2)(15,"label",7),t._uU(16,"City"),t.qZA(),t._UZ(17,"input",8),t.TgZ(18,"div",6),t._uU(19,"Alter Ego is required"),t.qZA()(),t.YNc(20,N,2,0,"button",9),t._uU(21,"\xa0\xa0 "),t.TgZ(22,"button",10),t._uU(23,"Submit"),t.qZA()(),t._UZ(24,"br"),t.TgZ(25,"a",11),t._uU(26,"View all customers"),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(s.customerForm.controls.name.value),t.xp6(1),t.Q6J("formGroup",s.customerForm),t.xp6(9),t.Q6J("hidden",!s.customer||s.customerForm.controls.name.valid),t.xp6(6),t.Q6J("hidden",!s.customer||s.customerForm.controls.city.valid),t.xp6(2),t.Q6J("ngIf",s.customer&&s.customer.id),t.xp6(2),t.Q6J("disabled",!s.customerForm.valid))},dependencies:[m.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,l.yS]}),r})()}];let Y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[l.Bz.forChild(I),l.Bz]}),r})(),w=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.ez,b.m,Y]}),r})()}}]);