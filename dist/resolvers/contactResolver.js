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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactResolver = void 0;
var type_graphql_1 = require("type-graphql");
var typedi_1 = require("typedi");
var contact_1 = require("../entities/contact");
var contact_service_1 = __importDefault(require("../services/contact.service"));
var contact_input_1 = require("./types/contact-input");
var auth_middleware_1 = require("../middleware/auth.middleware");
var ContactResolver = /** @class */ (function () {
    function ContactResolver(contactService) {
        this.contactService = contactService;
    }
    ContactResolver.prototype.contact = function (contactId) {
        return this.contactService.getSingleContact(contactId);
    };
    ContactResolver.prototype.userContacts = function (_a) {
        var user = _a.storage.user;
        return this.contactService.getListOfContacts(user);
    };
    ContactResolver.prototype.addContact = function (contactInput, _a) {
        var user = _a.storage.user;
        return this.contactService.addNewContact(contactInput, user);
    };
    ContactResolver.prototype.deleteContact = function (id, _a) {
        var user = _a.storage.user;
        this.contactService.deleteContact(id, user);
        return 'contact deleted';
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return contact_1.Contact; }, { nullable: true }),
        (0, type_graphql_1.UseMiddleware)(auth_middleware_1.AuthorizedUser),
        __param(0, (0, type_graphql_1.Arg)("contactId", function () { return type_graphql_1.Int; })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ContactResolver.prototype, "contact", null);
    __decorate([
        (0, type_graphql_1.Query)(function () { return [contact_1.Contact]; }),
        (0, type_graphql_1.UseMiddleware)(auth_middleware_1.AuthorizedUser),
        __param(0, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ContactResolver.prototype, "userContacts", null);
    __decorate([
        (0, type_graphql_1.UseMiddleware)(auth_middleware_1.AuthorizedUser),
        (0, type_graphql_1.Mutation)(function () { return contact_1.Contact; }),
        __param(0, (0, type_graphql_1.Arg)("input")),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [contact_input_1.ContactInput, Object]),
        __metadata("design:returntype", Promise)
    ], ContactResolver.prototype, "addContact", null);
    __decorate([
        (0, type_graphql_1.UseMiddleware)(auth_middleware_1.AuthorizedUser),
        (0, type_graphql_1.Mutation)(function () { return String; }),
        __param(0, (0, type_graphql_1.Arg)("id")),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", String)
    ], ContactResolver.prototype, "deleteContact", null);
    ContactResolver = __decorate([
        (0, typedi_1.Service)(),
        (0, type_graphql_1.Resolver)(function () { return contact_1.Contact; }),
        __param(0, (0, typedi_1.Inject)()),
        __metadata("design:paramtypes", [contact_service_1.default])
    ], ContactResolver);
    return ContactResolver;
}());
exports.ContactResolver = ContactResolver;
