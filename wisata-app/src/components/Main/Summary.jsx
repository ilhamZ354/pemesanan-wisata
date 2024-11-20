import LeftSide from "../Summary/Leftside"
import Rightside from "../Summary/Rightside";

export default function Summary() {
    return (
        <div className="summary flex flex-col sm:flex-col md:flex-row w-full justify-center gap-3 px-4 md:px-8">
            <div className="w-full md:w-1/2">
                <LeftSide />
            </div>
            <div className="w-full md:w-1/2">
                <Rightside />
            </div>
        </div>
    );
}
