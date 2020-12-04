"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var appointments_routes_1 = __importDefault(require("@modules/appointments/infra/http/routes/appointments.routes"));
var session_routes_1 = __importDefault(require("@modules/users/infra/http/routes/session.routes"));
var password_routes_1 = __importDefault(require("@modules/users/infra/http/routes/password.routes"));
var profile_routes_1 = __importDefault(require("@modules/users/infra/http/routes/profile.routes"));
var providers_routes_1 = __importDefault(require("@modules/appointments/infra/http/routes/providers.routes"));
var routes = express_1.Router();
routes.use('/appointments', appointments_routes_1.default);
routes.use('/users', users_routes_1.default);
routes.use('/login', session_routes_1.default);
routes.use('/password', password_routes_1.default);
routes.use('/profile', profile_routes_1.default);
routes.use('/providers', providers_routes_1.default);
exports.default = routes;
