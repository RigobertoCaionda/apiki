import {LinkArea} from './styled';
const Page = ({link, icon}) => {
	return (
			<LinkArea href={link}>{icon}</LinkArea>
		);
}
export default Page;