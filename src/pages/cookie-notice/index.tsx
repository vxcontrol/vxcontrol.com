import { CookieNoticeScreen } from '../../components/screens/cookie-notice';
import { GetServerSideProps } from 'next';

const CookieNoticePage = async () => {
    return <CookieNoticeScreen />;
};

export default CookieNoticePage;

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {},
    };
}
