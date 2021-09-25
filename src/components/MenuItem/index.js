import {LinkArea} from './styled';
const Page = ({link, title, description}) => {
	return (
			<LinkArea href={link} title={description}>{title}</LinkArea>
		);
}
export default Page;