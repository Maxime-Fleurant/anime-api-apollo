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
exports.Anime = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const studio_type_1 = require("../studio/studio.type");
const genre_type_1 = require("../genre/genre.type");
const character_type_1 = require("../character/character.type");
let Anime = /** @class */ (() => {
    let Anime = class Anime extends typeorm_1.BaseEntity {
    };
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.ID),
        typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
        __metadata("design:type", Number)
    ], Anime.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Anime.prototype, "title", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ type: 'text' }),
        __metadata("design:type", String)
    ], Anime.prototype, "desciption", void 0);
    __decorate([
        type_graphql_1.Field(() => studio_type_1.Studio),
        typeorm_1.ManyToOne(() => studio_type_1.Studio, (studio) => studio.animes, { onDelete: 'SET NULL', nullable: false }),
        __metadata("design:type", studio_type_1.Studio)
    ], Anime.prototype, "studio", void 0);
    __decorate([
        typeorm_1.RelationId((anime) => anime.studio),
        __metadata("design:type", Number)
    ], Anime.prototype, "studioId", void 0);
    __decorate([
        type_graphql_1.Field(() => [character_type_1.Character]),
        typeorm_1.OneToMany(() => character_type_1.Character, (character) => character.anime, { cascade: true }),
        __metadata("design:type", Array)
    ], Anime.prototype, "characters", void 0);
    __decorate([
        type_graphql_1.Field(() => [genre_type_1.Genre]),
        typeorm_1.ManyToMany(() => genre_type_1.Genre, (genre) => genre.animes),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Anime.prototype, "genres", void 0);
    Anime = __decorate([
        type_graphql_1.ObjectType(),
        typeorm_1.Entity()
    ], Anime);
    return Anime;
})();
exports.Anime = Anime;