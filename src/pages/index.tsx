import { HomeScreen } from '../components/screens/home';
import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';

const IndexPage = ({ title, description }) => {
    return <HomeScreen title={title} description={description} />
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const t = await getT(locale, 'home');

    const title = t('meta_title');
    const description = t('meta_description');

    return {
        props: {
            title,
            description,
        },
    };
}
