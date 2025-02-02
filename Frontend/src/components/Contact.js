const Contact = () => {
    return (
        <div>
            <h1 className="p-4 m-4 text-3xl font-bold">Contact Us</h1>
            <form>
                <input type="text" placeholder="name" className="p-2 m-2 border border-black rounded-md" />
                <input type="text" placeholder="message" className="p-2 m-2 border border-black rounded-md" />
                <button className="p-2 m-2 bg-gray-100 border border-black rounded-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact;