import { NextPage } from "next";
import Button from "../components/ui/button";

const DesignComponents: NextPage = () => (
    <>
        <h2 className="text-hm-blue">UI Components<span className="font-oswald font-semibold text-hm-blue"> | BUTTONS</span></h2>
        <div>
            <h4>BUTTON TYPES</h4>
            <p>Buttons provide actiosn that can be triggered with a single mouse click or a tap.  There are six different button types:</p>
            <ul>
                <li><strong>Primary (CTA):</strong> The most important action in the UI and should be limited to one per screen.</li>
                <li><strong>Secondary:</strong> Can be present on the screen with primary button and will have less visual weight. Most commonly used.</li>
                <li><strong>Destructive:</strong> Negative actions that users cannot recover from.</li>
                <li><strong>Disabled:</strong> Buttons that aer unavailable until users perform additional tasks.</li>
                <li><strong>Loading:</strong> A primary button that is pressed and has an action in progress.</li>
                <li><strong>CTA:</strong> An element that is relatively more important than the rest of the actions and elements on the page</li>
            </ul>
        </div>
        <div className="flex space-x-4 mt-4">
        </div>
        <div className="grid grid-cols-5 gap-8 auto-cols-min w-fit">
            <div className="flex flex-col gap-y-4">
                <h5 className="font-oswald">PRIMARY</h5>
                <Button type="button" variant="primary" outlined={true} name="log in" />
                <Button type="submit" variant="primary" name="log in" />
            </div>
            <div className="flex flex-col gap-y-4">
                <h5 className="font-oswald">SECONDARY</h5>
                <Button type="button" variant="secondary" outlined={true} name="Outlined - secondary" />
                <Button type="button" variant="secondary" name="learn more" />
            </div>
            <div className="flex flex-col gap-y-4">
                <h5 className="font-oswald">DESTRUCTIVE</h5>
                <Button type="button" variant="destructive" outlined={true} name="Outlined - destructive" />
                <Button type="button" variant="destructive" name="destructive" />
            </div>
            <div className="flex flex-col gap-y-4">
                <h5 className="font-oswald">DISABLED</h5>
                <Button type="button" variant="disabled" outlined={true} name="Disabled" disabled />
            </div>
            <div className="flex flex-col gap-y-4">
                <h5 className="font-oswald">LOADING</h5>
            </div>
        </div>
    </>
);

export default DesignComponents;