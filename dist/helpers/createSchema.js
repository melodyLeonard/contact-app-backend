"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
var type_graphql_1 = require("type-graphql");
var contactResolver_1 = require("../resolvers/contactResolver");
var userResolver_1 = require("../resolvers/userResolver");
var createSchema = function () {
    return (0, type_graphql_1.buildSchema)({
        resolvers: [
            contactResolver_1.ContactResolver,
            userResolver_1.UserResolver
        ],
        authChecker: function (_a) {
            var req = _a.context.req;
            return !!req.session.userId;
        },
    });
};
exports.createSchema = createSchema;
