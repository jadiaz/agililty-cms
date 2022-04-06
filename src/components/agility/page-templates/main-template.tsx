import { ContentZone } from "@agility/nextjs";
import { getModule } from "../page-modules";

const MainTemplate = (props: any) => {
    return (
        <ContentZone name="MainContentZone" {...props} getModule={getModule} />
    );
}

export default MainTemplate;