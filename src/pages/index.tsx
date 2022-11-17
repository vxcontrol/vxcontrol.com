import { HomeScreen } from '../components/screens/home';
import { GetServerSideProps } from 'next';

const IndexPage = () => {
    return <HomeScreen />
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {},
    };
}
