import { Link } from "react-router-dom";
import $ from 'jquery';

export const CyclesHierarchy = () => {
    $(function () {
        $('.genealogy-tree ul').hide();
        $('.genealogy-tree>ul').show();
        $('.genealogy-tree ul.active').show();
        $('.genealogy-tree li').on('click', function (e) {
            var children = $(this).find('> ul');
            if (children.is(":visible")) children.hide('fast').removeClass('active');
            else children.show('fast').addClass('active');
            e.stopPropagation();
        });
    });
    return (
        <>
        <div class="body genealogy-body genealogy-scroll">
    <div class="genealogy-tree">
        <ul>
            <li>
                <Link to="">
                    <div class="member-view-box">
                        <div class="member-image">
                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                            <div class="member-details">
                                <h6>John Doe</h6>
                            </div>
                        </div>
                    </div>
                </Link>
                <ul class="active">
                    <li>
                        <Link to="">
                            <div class="member-view-box">
                                <div class="member-image">
                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                    <div class="member-details">
                                        <h6>Member 1</h6>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <ul >
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-1</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-2</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-3</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>Member 1-3-1</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>Member 1-3-2</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>Member 1-3-3</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-4</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-5</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-6</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>Member 1-7</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>Member 1-7-1</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>Member 1-7-2</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to="">
                                                    <div class="member-view-box">
                                                        <div class="member-image">
                                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                            <div class="member-details">
                                                                <h6>Member 1-7-2-1</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <div class="member-view-box">
                                                        <div class="member-image">
                                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                            <div class="member-details">
                                                                <h6>Member 1-7-2-2</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <div class="member-view-box">
                                                        <div class="member-image">
                                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                            <div class="member-details">
                                                                <h6>Member 1-7-2-3</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>Member 1-7-3</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">
                            <div class="member-view-box">
                                <div class="member-image">
                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                    <div class="member-details">
                                        <h6>Member 2</h6>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <ul class="active">
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>John Doe</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                              <ul>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>John Doe</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="">
                                    <div class="member-view-box">
                                        <div class="member-image">
                                            <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                            <div class="member-details">
                                                <h6>John Doe</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                              <ul>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <div class="member-view-box">
                                                <div class="member-image">
                                                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member"/>
                                                    <div class="member-details">
                                                        <h6>John Doe</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>

</script>
</>






    )
}