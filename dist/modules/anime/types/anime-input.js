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
exports.UpdateAnimeInput = exports.AnimeInput = exports.BaseAnimeInput = void 0;
const type_graphql_1 = require("type-graphql");
let BaseAnimeInput = /** @class */ (() => {
    let BaseAnimeInput = class BaseAnimeInput {
    };
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], BaseAnimeInput.prototype, "title", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], BaseAnimeInput.prototype, "desciption", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], BaseAnimeInput.prototype, "studioId", void 0);
    BaseAnimeInput = __decorate([
        type_graphql_1.InputType()
    ], BaseAnimeInput);
    return BaseAnimeInput;
})();
exports.BaseAnimeInput = BaseAnimeInput;
let AnimeInput = /** @class */ (() => {
    let AnimeInput = class AnimeInput extends BaseAnimeInput {
    };
    __decorate([
        type_graphql_1.Field(() => [Number]),
        __metadata("design:type", Array)
    ], AnimeInput.prototype, "genreIds", void 0);
    AnimeInput = __decorate([
        type_graphql_1.InputType()
    ], AnimeInput);
    return AnimeInput;
})();
exports.AnimeInput = AnimeInput;
let UpdateAnimeInput = /** @class */ (() => {
    let UpdateAnimeInput = class UpdateAnimeInput {
    };
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], UpdateAnimeInput.prototype, "title", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], UpdateAnimeInput.prototype, "desciption", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        __metadata("design:type", Number)
    ], UpdateAnimeInput.prototype, "studioId", void 0);
    UpdateAnimeInput = __decorate([
        type_graphql_1.InputType()
    ], UpdateAnimeInput);
    return UpdateAnimeInput;
})();
exports.UpdateAnimeInput = UpdateAnimeInput;