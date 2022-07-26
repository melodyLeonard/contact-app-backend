"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginInput = exports.SignUpInput = void 0;
var class_validator_1 = require("class-validator");
var type_graphql_1 = require("type-graphql");
var SignUpInput = /** @class */ (function () {
    function SignUpInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", String)
    ], SignUpInput.prototype, "firstName", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", String)
    ], SignUpInput.prototype, "lastName", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], SignUpInput.prototype, "email", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", String)
    ], SignUpInput.prototype, "password", void 0);
    SignUpInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], SignUpInput);
    return SignUpInput;
}());
exports.SignUpInput = SignUpInput;
var LoginInput = /** @class */ (function () {
    function LoginInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], LoginInput.prototype, "email", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", String)
    ], LoginInput.prototype, "password", void 0);
    LoginInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], LoginInput);
    return LoginInput;
}());
exports.LoginInput = LoginInput;
