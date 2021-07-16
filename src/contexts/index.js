import React from 'react';
import {AppProvider } from './appcontext'
import {CandidateProvider } from './candidatecontext'

const ApplicationProvider = props => {
    return (
        <CandidateProvider>
            <AppProvider>
                {props.children}
            </AppProvider>
        </CandidateProvider>
    )
}

export default ApplicationProvider
