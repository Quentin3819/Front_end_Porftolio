import loadable from "@loadable/component";

interface IProps {
    icon: string;
}

const DynamicIcon: React.FC<IProps> = ({ ...props }) => {
    const [library, iconComponent] = props.icon.split("/");

    if (!library || !iconComponent) return <div>Could Not Find Icon</div>;

    const lib = library.toLowerCase();
    const Icon = loadable(() => import(`react-icons/${lib}/index.js`), {
            resolveComponent: (el: JSX.Element) =>
            el[iconComponent as keyof JSX.Element]
    });

    return (
        <Icon />

    );
};

export default DynamicIcon;
