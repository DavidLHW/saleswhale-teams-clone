import React from 'react';
import { ComponentSchema } from '../types';

type Schema = [ComponentSchema | undefined, (c: ComponentSchema) => void] | undefined;

export default React.createContext<Schema>(undefined);