import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function MyModal({ children }: Props) {
    return (
        <section
            aria-hidden
            onClick={(e) => e.stopPropagation()}
            className="myModal w-full max-w-lg p-3 bg-lightBase dark:bg-darkSecond shadow-lg rounded-md absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:p-5"
        >
            {children}
        </section>
    );
}

// я створюю контекст для модалів, з окремим затемненням для них, і будуть декілька булеанів для едіту, новго таксу, додати директорію, видалити дані,
