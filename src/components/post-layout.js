import * as React from 'react';
import {Link} from 'gatsby';
import Layout from './layout';

export default function PostLayout({children}) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}