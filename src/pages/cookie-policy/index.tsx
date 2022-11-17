import { CookieNoticeScreen } from '../../components/screens/cookie-notice';
import { GetServerSideProps } from 'next';
import getT from 'next-translate/getT';
import { Meta } from '../../components/Meta';

const CookieNoticePage = ({ locale, title, description }) => {
    return (
        <>
            <Meta title={title} description={description} locale={locale} siteName={title} />

            <CookieNoticeScreen />
        </>
    );
};

export default CookieNoticePage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const t = await getT(locale, 'cookies-notice');

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
