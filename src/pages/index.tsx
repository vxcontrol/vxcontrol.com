import { HomeScreen } from '../components/screens/home';
import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';
import { Meta } from '../components/Meta';

const IndexPage = ({ locale, title, description, }) => {
    return (
        <>
            <Meta title={title} description={description} locale={locale} siteName={title} />

            <HomeScreen />
        </>
    );
}; 

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const t = await getT(locale, 'home');

    const title = t('meta_title');
    const description = t('meta_description');

    return {
        props: {
            locale,
            title,
            description,
        },
    };
}
