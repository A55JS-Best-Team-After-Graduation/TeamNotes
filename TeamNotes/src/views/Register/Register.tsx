import { useContext, useState } from 'react';
import { AppContext, defaultUserData } from '../../context/AppContext';
import { registerUser, createUserProfile } from '../../service/service-user';
import { validateRegistrationForm } from '../../validation/validation';

const Register = () => {
    const context = useContext(AppContext);

    if (!context) {
        console.log("AppContextProvider is missing in the component tree.");
        return <div>Loading...</div>;
    }

    const { setContext } = context;

    const [form, setForm] = useState({
        uid: '',
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState<{ email?: string; username?: string; password?: string } | null>(null);

    const updateForm = (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [prop]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateRegistrationForm(form);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        try {
            const userCredential = await registerUser(form.email, form.password);
            const user = userCredential.user;

            await createUserProfile(
                user.uid,
                form.username,
                form.email,
                form.password,
            );

            setContext({
                userData: {
                    ...defaultUserData, 
                    uid: user.uid,
                    username: form.username,
                    email: form.email,
                  }
            });
            
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleRegister} className="flex flex-col space-y-4">
                <input
                    className="border border-gray-300 p-2 rounded"
                    type="text"
                    placeholder="Username"
                    value={form.username}
                    onChange={updateForm("username")}
                />
                {error?.username && <div className="text-red-500">{error.username}</div>}

                <input
                    className="border border-gray-300 p-2 rounded"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={updateForm("email")}
                />
                {error?.email && <div className="text-red-500">{error.email}</div>}

                <input
                    className="border border-gray-300 p-2 rounded"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={updateForm("password")}
                />
                {error?.password && <div className="text-red-500">{error.password}</div>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
