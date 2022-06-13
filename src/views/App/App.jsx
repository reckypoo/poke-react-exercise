import 'antd/dist/antd.css';
import {
  Layout,
  PageHeader,
  Typography,
  Divider
} from 'antd'
import { FilteringSection } from '../../components/FilteringSection'
import {ComparativeSection} from '../../components/ComparativeSection'
import {ResetSection} from '../../components/ResetSection'

export const App = () => {
  return (
    <Layout>
      <PageHeader><Typography.Title style={{textAlign: "center"}}>Pokémon React Exercise</Typography.Title></PageHeader>
      
      {/* Filtering section */}
      <FilteringSection />

      <Divider />

      {/* Comparative section goes here */}
      <ComparativeSection />

      <Divider />

      {/* Reset sectino goes here */}
      <ResetSection />

    </Layout>
  );
}