import React from 'react';
import { bem } from './bem';
import './title.scss';

const cl = bem('title');

export const Title = () => <h1 className={cl()}>Hello World</h1>;
