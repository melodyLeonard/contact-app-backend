"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
var type_graphql_1 = require("type-graphql");
var typedi_1 = require("typedi");
var user_1 = require("../entities/user");
var user_service_1 = __importDefault(require("../services/user.service"));
var login_response_1 = require("./types/login-response");
var user_input_1 = require("./types/user-input");
var auth_middleware_1 = require("../middleware/auth.middleware");
var UserResolver = /** @class */ (function () {
    function UserResolver(userService) {
        this.userService = userService;
    }
    UserResolver.prototype.me = function (_a) {
        var user = _a.storage.user;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('----->', user);
                        return [4 /*yield*/, this.userService.getMe(user)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // Signup user
    UserResolver.prototype.signup = function (_a) {
        var dto = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userService.signup(__assign({}, dto))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // Signup user
    UserResolver.prototype.login = function (_a) {
        var dto = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userService.login(__assign({}, dto))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return user_1.User; }, { nullable: true }),
        (0, type_graphql_1.UseMiddleware)(auth_middleware_1.AuthorizedUser),
        __param(0, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "me", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return String; }),
        __param(0, (0, type_graphql_1.Arg)("input")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_input_1.SignUpInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "signup", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return login_response_1.LoginResponse; }),
        __param(0, (0, type_graphql_1.Arg)("input")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_input_1.LoginInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "login", null);
    UserResolver = __decorate([
        (0, typedi_1.Service)(),
        (0, type_graphql_1.Resolver)(user_1.User),
        __param(0, (0, typedi_1.Inject)()),
        __metadata("design:paramtypes", [user_service_1.default])
    ], UserResolver);
    return UserResolver;
}());
exports.UserResolver = UserResolver;
