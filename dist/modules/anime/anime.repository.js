"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeRepository = void 0;
const di_1 = require("@graphql-modules/di");
const typeorm_1 = require("typeorm");
const anime_type_1 = require("./anime.type");
let AnimeRepository = /** @class */ (() => {
    let AnimeRepository = class AnimeRepository extends typeorm_1.Repository {
    };
    AnimeRepository = __decorate([
        di_1.Injectable(),
        typeorm_1.EntityRepository(anime_type_1.Anime)
    ], AnimeRepository);
    return AnimeRepository;
})();
exports.AnimeRepository = AnimeRepository;