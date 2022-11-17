import { CookieNoticeScreen } from '../../components/screens/cookie-notice';
import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';

const CookieNoticePage = ({ title, description }) => {
    return <CookieNoticeScreen title={title} description={description} />;
};

export default CookieNoticePage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const t = await getT(locale, 'cookies-notice');

    const title = t('meta_title');
    const description = t('meta_description');

    return {
        props: {
            title,
            description,
        },
    };
}
