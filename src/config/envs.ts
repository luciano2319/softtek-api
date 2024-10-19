import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    SWAPI_URL: string;
    DATABASE_URL: string;
}

const envsSchema = joi.object({
    SWAPI_URL: joi.string().uri().required(),
    DATABASE_URL: joi.string().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${ error.message }`);
}

const envVars: EnvVars = value;

export const envs = {
    apiUrl: envVars.SWAPI_URL,
}