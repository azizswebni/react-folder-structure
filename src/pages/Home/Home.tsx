import * as React from 'react';
import Layout from 'layouts/Home'
import API from '../../service/api'
import API_BOOK from '../../service/endpoints'
interface HomeProps {

}

export const Home: React.FunctionComponent<HomeProps> = () => {
    API(API_BOOK.LOGIN_API).then((res)=> console.log(res)).catch((err)=> console.log(err))
    
    return (
        <Layout>
            Happy Coding!!!
        </Layout>
    );
}