import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from '../../dtos/request/jwt-payload';
import { ConfigurationsService } from '@src/configurations/configuration.service';
import { ConfigurationsEnum } from '@src/configurations/configuration.enum';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  constructor(private readonly configurationService: ConfigurationsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configurationService.get(ConfigurationsEnum.JWT_SECRET),
    });
  }

  async validate(payload: JwtPayload, _done: VerifiedCallback) {
    return { accountId: payload.accountId, email: payload.email };
  }
}
