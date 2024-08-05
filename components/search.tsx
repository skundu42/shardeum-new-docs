
import algo from 'algoliasearch/lite';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia';
 
const client = algo('5IL5IC6HIH', '3722c7291eb2de44b057a9c9f66a5bcb');
const index = client.initIndex('newdocs');
 
export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog index={index} {...props} />;
}