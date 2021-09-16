(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Practice\CIM2\CIM.WebApi\CIM.WebApi\ngClient\src\main.ts */"zUnb");


/***/ }),

/***/ "0zL+":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-api.service */ "xcFc");


class CustomerService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAllCustomers() {
        let url = 'api/Customer/GetCustomerList';
        return this.apiService.get(url);
    }
    saveCustomer(customer) {
        let url = 'api/Customer/SaveCustomer';
        return this.apiService.postFile(url, customer);
    }
    getAllCustomerById(id) {
        let url = 'api/Customer/GetCustomerById?id=' + id;
        return this.apiService.get(url);
    }
    deleteCustomer(customer) {
        let url = 'api/Customer/DeleteCustomer';
        return this.apiService.postFile(url, customer);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_api_service__WEBPACK_IMPORTED_MODULE_1__["WebApiService"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GoNf":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CountryComponent {
    constructor() { }
    ngOnInit() {
    }
}
CountryComponent.ɵfac = function CountryComponent_Factory(t) { return new (t || CountryComponent)(); };
CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryComponent, selectors: [["app-country"]], decls: 2, vars: 0, template: function CountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "country works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "MwYd":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_customer_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/customer-address */ "VikM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/country.service */ "Xpb8");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customer.service */ "0zL+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["attachedImageInput"];
function CustomerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const c_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.loadById(c_r6.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r6.CustomerName);
} }
function CustomerComponent_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", a_r9.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r9.CountryName);
} }
function CustomerComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_div_89_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onImageUploadClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_90_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_div_90_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.onImageUploadClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Change Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CustomerComponent_div_90_button_3_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.customerPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.applicationState == "edit" || ctx_r4.applicationState == "new");
} }
function CustomerComponent_tr_108_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_tr_108_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.removeCustomerAddresses(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r16);
} }
class CustomerComponent {
    constructor(countryService, customerService, fb, domSanitizer) {
        this.countryService = countryService;
        this.customerService = customerService;
        this.fb = fb;
        this.domSanitizer = domSanitizer;
        this.countries = [];
        this.customers = [];
        this.customerPhotoUrl = '';
        this.customerImageSelected = false;
        this.applicationState = 'new';
        this.formSubmited = false;
    }
    ngOnInit() {
        this.buildForm();
        this.LoadCustomerList();
        this.LoadCountryDDL();
    }
    LoadCountryDDL() {
        this.countryService.getAllCountry().subscribe((data) => {
            this.countries = data;
        }, (err) => {
            console.log(err);
        });
    }
    LoadCustomerList() {
        this.customerService.getAllCustomers().subscribe((data) => {
            this.customers = data;
        }, (err) => {
            console.log(err);
        });
    }
    onImageSelected(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            this.selectedFile = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.selectedFileString = reader.result.split(',')[1];
                this.customerPhotoUrl = e.target.result;
                this.selectedFileName = file.name;
            };
            this.customerImageSelected = true;
        }
    }
    onImageUploadClick(event) {
        event.preventDefault();
        let element = document.getElementById('imageInput');
        element.click();
    }
    buildForm() {
        this.mainForm = this.fb.group({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('0'),
            CountryID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            CustomerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]),
            FatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            MotherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            MaritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('1'),
            CustomerPhoto: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            CustomerAddresses: this.fb.array([
                this.buildCustomerAddressFormArrary()
            ])
        });
    }
    addCustomerAddresses(address = new _models_customer_address__WEBPACK_IMPORTED_MODULE_1__["CustomerAddress"]()) {
        const CustomerAddressesForm = this.buildCustomerAddressFormArrary(address);
        this.getCustomerAddresses().push(CustomerAddressesForm);
    }
    buildCustomerAddressFormArrary(address = new _models_customer_address__WEBPACK_IMPORTED_MODULE_1__["CustomerAddress"]()) {
        return this.fb.group({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](address.ID),
            CustomerID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](address.CustomerID),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](address.Address, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(500)])
        });
    }
    removeCustomerAddresses(i) {
        this.getCustomerAddresses().removeAt(i);
    }
    getCustomerAddresses() {
        return this.mainForm.get("CustomerAddresses");
    }
    onSave() {
        this.formSubmited = true;
        if (this.mainForm.valid) {
            this.customerData = this.mainForm.getRawValue();
            console.log(this.customerData);
            let fd = new FormData();
            let id = this.customerData.ID.toString();
            console.log(id);
            fd.append("ID", this.customerData.ID.toString());
            fd.append("CountryID", this.customerData.CountryID.toString());
            fd.append("CustomerName", this.customerData.CustomerName.toString());
            fd.append("FatherName", this.customerData.FatherName.toString());
            fd.append("MotherName", this.customerData.MotherName.toString());
            fd.append("MaritalStatus", this.customerData.MaritalStatus.toString());
            this.customerData.CustomerAddresses.forEach((item, i) => {
                fd.append(`CustomerAddresses[${i}].ID`, item.ID.toString());
                fd.append(`CustomerAddresses[${i}].CustomerID`, item.CustomerID.toString());
                fd.append(`CustomerAddresses[${i}].Address`, item.Address);
            });
            if (this.selectedFile != null) {
                fd.append("CustomerPhoto", this.selectedFile, this.selectedFile.name);
            }
            console.log(fd);
            fd.forEach((value, key) => {
                console.log(key + " " + value);
            });
            this.customerService.saveCustomer(fd).subscribe((data) => {
                console.log(data);
                this.resetForm();
            }, (err) => {
                console.log(err);
            });
        }
    }
    resetForm() {
        this.LoadCustomerList();
        this.mainForm.enable();
        this.buildForm();
        this.selectedFile = null;
        this.applicationState = 'new';
        this.customerImageSelected = false;
        this.formSubmited = false;
        this.attachedImageInput.nativeElement.value = '';
    }
    loadById(id) {
        this.applicationState = 'view';
        this.customerService.getAllCustomerById(id).subscribe((data) => {
            console.log(data);
            this.mainForm.patchValue({
                ID: data.ID,
                CountryID: data.CountryID,
                CustomerName: data.CustomerName,
                FatherName: data.FatherName,
                MotherName: data.MotherName,
                MaritalStatus: data.MaritalStatus.toString()
            });
            if (data.CustomerPhoto != null) {
                this.customerPhotoUrl = 'data:image/jpeg;base64,' + data.CustomerPhoto;
                this.customerImageSelected = true;
            }
            else {
                this.customerImageSelected = false;
            }
            this.getCustomerAddresses().clear();
            data.CustomerAddresses.forEach((add, i) => {
                this.addCustomerAddresses(add);
            });
            this.mainForm.disable();
        }, (err) => {
            console.log(err);
        });
    }
    editModeOpen() {
        this.applicationState = 'edit';
        this.mainForm.enable();
    }
    deleteCustomer() {
        this.customerData = this.mainForm.getRawValue();
        if (this.customerData.ID > 0) {
            let fd = new FormData();
            fd.append("ID", this.customerData.ID.toString());
            this.customerService.deleteCustomer(fd).subscribe((data) => {
                console.log(data);
                this.resetForm();
            }, (err) => {
                console.log(err);
            });
        }
        else {
            console.log('Not found!');
        }
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], viewQuery: function CustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.attachedImageInput = _t.first);
    } }, decls: 109, vars: 9, consts: [[1, "card", "mb-2"], [1, "card-header", "text-center"], [1, "card-body"], [1, "row"], [1, "col-4"], [1, "form-group", "border", "p-3"], [1, "w-auto"], ["class", "card text-center mb-1 upper-hover", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-8"], [1, "row", "mb-1"], [1, "col-12"], [1, "btn", "btn-primary", "btn-flat", 3, "disabled", "click"], [1, "btn", "btn-success", "btn-flat", 3, "disabled", "click"], [1, "btn", "btn-danger", "btn-flat", 3, "disabled", "click"], [1, "btn", "btn-secondary", "btn-flat", 3, "click"], [3, "formGroup"], [1, "form-group", "mb-1"], [1, "control-label", "col-4"], ["formControlName", "CustomerName", 1, "form-control", "form-control-sm"], ["formControlName", "FatherName", 1, "form-control", "form-control-sm"], ["formControlName", "MotherName", 1, "form-control", "form-control-sm"], ["id", "single", "type", "radio", "name", "MaritalStatus", "formControlName", "MaritalStatus", "value", "1", 1, "form-check-input"], ["for", "single"], ["id", "married", "type", "radio", "name", "MaritalStatus", "formControlName", "MaritalStatus", "value", "2", 1, "form-check-input"], ["for", "married"], ["id", "other", "type", "radio", "name", "MaritalStatus", "formControlName", "MaritalStatus", "value", "3", 1, "form-check-input"], ["for", "other"], ["formControlName", "CountryID", 1, "form-control", "form-control-sm"], ["disabled", "", "selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "file", "id", "imageInput", "accept", ".jpeg,.jpg,.png", 1, "form-control", "form-control-sm", 3, "change"], ["attachedImageInput", ""], ["class", "fileUpload", 4, "ngIf"], ["class", "customer-image", 4, "ngIf"], [1, "col-12", "mb-1"], [1, "btn", "btn-primary", "btn-flat", 3, "click"], [1, "table", "table-bordered", "table-responsive"], [2, "width", "200px"], ["formArrayName", "CustomerAddresses"], [4, "ngFor", "ngForOf"], [1, "card", "text-center", "mb-1", "upper-hover", 3, "click"], [1, "card-title", "custom-link-pointer"], [3, "value"], [1, "fileUpload"], [1, "centerd", "text-center", 3, "click"], [1, "text-center"], [1, "customer-image"], ["alt", "Customer Image", 1, "myImage", 3, "src"], [1, "middle"], ["class", "btn btn-dark", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", 3, "click"], [3, "formGroupName"], ["type", "text", "formControlName", "Address", 1, "form-control", "form-control-sm"], [1, "btn", "btn-primary", "btn-flat"], [1, "btn", "btn-danger", "btn-flat", 3, "click"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Customer Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Customer List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CustomerComponent_div_9_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_19_listener() { return ctx.editModeOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_22_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_25_listener() { return ctx.deleteCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_28_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Basic Informations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Father Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Mother Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Marital Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "SINGLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "MARRIED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "OTHER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, CustomerComponent_option_80_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomerComponent_Template_input_change_86_listener($event) { return ctx.onImageSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, CustomerComponent_div_89_Template, 4, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, CustomerComponent_div_90_Template, 4, 2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Other Informations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_98_listener() { return ctx.addCustomerAddresses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "tbody", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, CustomerComponent_tr_108_Template, 9, 1, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.applicationState == "edit" || ctx.applicationState == "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.applicationState == "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.applicationState == "edit" || ctx.applicationState == "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.customerImageSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customerImageSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCustomerAddresses().controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n  border: solid 1px #DDD !important;\r\n  padding: 0 10px 10px 10px;\r\n}\r\n\r\n\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  font-size: inherit;\r\n  line-height: 30px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  color: #555;\r\n}\r\n\r\n.custom-link-pointer[_ngcontent-%COMP%]{\r\n    cursor:pointer;\r\n}\r\n\r\n.upper-hover[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.btn-flat[_ngcontent-%COMP%]{\r\n    border-radius:0px !important;\r\n}\r\n\r\n.mr-1[_ngcontent-%COMP%]{\r\n    margin-right:10px;\r\n}\r\n\r\n.fileUpload[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-radius: 3px;\r\n  background: rgba(0, 0, 0, 0.3 );\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.customer-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-radius: 3px;\r\n  background: rgba(0, 0, 0, 0.3 );\r\n  width: 100%;\r\n  height: 180px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: scale-down;\r\n}\r\n\r\n.customer-image[_ngcontent-%COMP%]:hover   .myImage[_ngcontent-%COMP%] {\r\n  opacity: 0.3;\r\n}\r\n\r\n.customer-image[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.middle[_ngcontent-%COMP%] {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.myImage[_ngcontent-%COMP%] {\r\n  transition: .5s ease;\r\n}\r\n\r\n.centerd[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBOzs7O0VBSUU7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCIiwiZmlsZSI6ImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0RERCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi8qbGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufSovXHJcblxyXG5sZWdlbmQge1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5jdXN0b20tbGluay1wb2ludGVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi51cHBlci1ob3Zlcjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxufVxyXG4uYnRuLWZsYXR7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItMXtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG59XHJcblxyXG5cclxuLmZpbGVVcGxvYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zICk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tZXItaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zICk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxufVxyXG5cclxuLmN1c3RvbWVyLWltYWdlOmhvdmVyIC5teUltYWdlIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jdXN0b21lci1pbWFnZTpob3ZlciAubWlkZGxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLm1pZGRsZSB7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teUltYWdlIHtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNlbnRlcmQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'customerInformationManagement';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VikM":
/*!********************************************!*\
  !*** ./src/app/models/customer-address.ts ***!
  \********************************************/
/*! exports provided: CustomerAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddress", function() { return CustomerAddress; });
class CustomerAddress {
    constructor() {
        this.ID = 0, this.CustomerID = 0, this.Address = '';
    }
}


/***/ }),

/***/ "Xpb8":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-api.service */ "xcFc");


class CountryService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAllCountry() {
        let url = 'api/Country/GetCountries';
        return this.apiService.get(url);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_api_service__WEBPACK_IMPORTED_MODULE_1__["WebApiService"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer.component */ "MwYd");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/country.component */ "GoNf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _country_country_component__WEBPACK_IMPORTED_MODULE_6__["CountryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return [""]; };
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/country"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "nav-link", "active", 3, "routerLink"], [1, "nav-item", "nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hana Systems Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country/country.component */ "GoNf");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer/customer.component */ "MwYd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"] },
    { path: 'home', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"] },
    { path: 'country', component: _country_country_component__WEBPACK_IMPORTED_MODULE_1__["CountryComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xcFc":
/*!*********************************************!*\
  !*** ./src/app/services/web-api.service.ts ***!
  \*********************************************/
/*! exports provided: WebApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApiService", function() { return WebApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class WebApiService {
    constructor(httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
        this.baseUrl = "";
        //this.baseUrl = "http://localhost:52439/";
    }
    get(url, parmams = null) {
        if (!parmams) {
            return this.httpClient.get(this.baseUrl + url);
        }
        else {
            return this.httpClient.get(this.baseUrl + url + parmams);
        }
    }
    postFile(url, formData) {
        if (formData) {
            return this.httpClient.post(this.baseUrl + url, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    }
    post(url, parmams = null) {
        if (parmams) {
            return this.httpClient.post(this.baseUrl + url, parmams, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
        else {
            return this.httpClient.post(this.baseUrl + url, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    }
    handleError(error) {
        console.log('error:', error);
        console.log('error.error:', error.error);
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            if (!error.url.includes('SubmitPickupSchedule')) {
                alert(`Request not processed Due To Server Error`);
            }
        }
        if (error.error["ExceptionType"] && error.error["ExceptionType"] == "System.Security.SecurityException") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
    }
    ;
}
WebApiService.ɵfac = function WebApiService_Factory(t) { return new (t || WebApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]('BASE_URL')); };
WebApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WebApiService, factory: WebApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"](providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map