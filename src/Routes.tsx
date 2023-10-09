import {
    createBrowserRouter,
    RouterProvider,
    LoaderFunctionArgs,
    defer,
} from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { getTasks } from "./utils/getTasks";
import SideBarsProvider from "./context/SideBarsContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: async ({ request }: LoaderFunctionArgs) => {
            const url = new URL(request.url);
            const searchQ = url.searchParams.get("q") ?? "";
            const existingData = queryClient.getQueryData(["search", searchQ]);
            if (existingData) {
                return defer({ tasks: existingData });
            }
            return defer({
                tasks: queryClient.fetchQuery({
                    queryKey: ["search", searchQ],
                    queryFn: () => getTasks(searchQ),
                }),
            });
        },
    },
]);

export default function Routes() {
    return (
        <QueryClientProvider client={queryClient}>
            <SideBarsProvider>
                <RouterProvider router={router} />
            </SideBarsProvider>
        </QueryClientProvider>
    );
}
