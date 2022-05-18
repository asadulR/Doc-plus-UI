import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
// import { toast, ToastContainer } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'b412486ddeb288177d036ed34a230bf4';




    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                alert('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor');
                            }
                        })
                }

            })
    }
    return (
        <section className='container mx-auto px-3 my-10'>
            <div className='h-screen justify-center items-center'>
                <div className="card max-w-lg mx-auto shadow-xl bg-accent" data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="text-center text-secondary text-2xl mb-4 font-bold">Add a New Doctor</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full mb-3">
                                <input type="text" placeholder="Enter Doctor's name" className="input input-bordered w-full input-primary "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        }
                                    })}

                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full mb-3">
                                <input type="email" placeholder="Enter email" className="input input-bordered w-full input-primary "
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}

                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full mb-6">
                                <select {...register("specialty")}
                                    className="select select-primary w-full">
                                    <option disabled selected>Teeth Orthodontics</option>
                                    <option>Cosmetic Dentistry</option>
                                    <option>Teeth Cleaning</option>
                                    <option>Cavity Protection</option>
                                    <option>Pediatric Dental</option>
                                    <option>Oral Surgery</option>
                                </select>
                                {/* <input type="text" placeholder="Specialization" className="input input-bordered w-full input-primary"
                                    {...register("speciality", {
                                        required: {
                                            value: true,
                                            message: "Specialization is Required"
                                        },
                                    })}

                                /> */}
                                {/* <label className="label">
                                    {errors.speciality?.type === 'required' && <span className="label-text-alt text-red-700">{errors.speciality.message}</span>}
                                </label> */}
                            </div>
                            <div className="form-control w-full mt-8">
                                <input type="file" className="input input-bordered w-full input-primary "
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Image is Required"
                                        }
                                    })}

                                />
                                <label className="label">
                                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-700">{errors.img.message}</span>}
                                </label>
                            </div>
                            <input className='btn w-full btn-primary mt-4' type="submit" value='Add' />
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;