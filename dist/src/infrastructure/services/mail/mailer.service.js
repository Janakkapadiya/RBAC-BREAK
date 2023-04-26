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
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const environment_config_service_1 = require("../../config/environment-config/environment-config.service");
let MailerService = class MailerService {
    constructor(emailConfig) {
        this.emailConfig = emailConfig;
        this.transport = nodemailer.createTransport({
            host: this.emailConfig.getEmailHost(),
            port: this.emailConfig.getEmailPort(),
            secure: false,
            auth: {
                user: this.emailConfig.getEmailSender(),
                pass: this.emailConfig.getEmailSecret(),
            },
        });
    }
    async sendEmail(to, subject, body) {
        try {
            const mailOptions = {
                from: this.emailConfig.getEmailSender(),
                to,
                subject,
                text: body,
                html: body,
            };
            const info = await this.transport.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return true;
        }
        catch (err) {
            return false;
        }
    }
};
MailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_config_service_1.EnvironmentConfigService])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map