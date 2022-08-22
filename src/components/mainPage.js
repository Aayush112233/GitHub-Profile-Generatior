import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate, useLocation } from "react-router-dom"

import "../styles/info.css"
import profile from "../assets/gitHUB.png"
import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { BiBuildings } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { BsGlobe } from "react-icons/bs"
import { MdWorkOutline } from "react-icons/md"
import "../styles/homepage.css"
import { Button } from "react-bootstrap"

export const Home = () => {
    const userDetails = useLocation().state
    console.log("UserDetails: ", userDetails)
    const navigate = useNavigate();
    const navInfo = () => {
        navigate('/');
    };

    return (
        <>
            <div className="container-fluid content">
                <div className="container-fluid content-in">
                    <div className="row d-flex">
                        <div className="col-7">
                            <IoMdArrowRoundBack size={"50px"} color={"black"} onClick={navInfo} className="mt-3 pointer" />
                        </div>
                        <div className="col-4 d-flex justify-content-end mt-3">
                            <Button className="btn">Hire Me</Button>
                        </div>
                    </div>

                    <div className="header">
                        {userDetails.avatar_url ?
                            <img src={userDetails.avatar_url} className="profileImg mx-auto d-block mb-3 mt-3" alt="gitHub profile" />:
                            <img src={profile} className="profileImg mx-auto d-block mb-3 mt-3 " alt="gitHub profile" />
                        }
                        <h1 className="mt-5">{userDetails.name}</h1>
                    </div>
                    <div className="follow mb-3">
                        <div>
                            <h4>Followers</h4>
                            <h6>{userDetails.followers}</h6>
                        </div>
                        <div>
                            <h4>Following</h4>
                            <h6>{userDetails.following}</h6>
                        </div>
                        <div>
                            <h4>Repository</h4>
                            <h6>{userDetails.public_repos}</h6>
                        </div>
                    </div>
                    <div className="row content-user">
                        <div className="col-sm-12 col-md-3 card">
                            <h5> <GoLocation className="icon" />{userDetails.location}</h5>
                            <h5> <BiBuildings className="icon" />{userDetails.company}</h5>                            
                            <h5> <MdWorkOutline className="icon" />{userDetails.hireable}</h5>
                        </div>
                        <div className="col-sm-12 col-md-3 card">
                            <h5> <AiOutlineMail className="icon" />{userDetails.email}</h5>
                            <h5> <FiTwitter className="icon" />{userDetails.twitter_username}</h5>
                            <h5> <BsGlobe className="icon" />{userDetails.blog} </h5>
                        </div>
                        <div className="col-sm-12 col-md-3 bio">
                            <h4>Bio</h4>
                            <div>None</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}