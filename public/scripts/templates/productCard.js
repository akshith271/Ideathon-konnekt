export const renderProductCard = (product) => {
    const { name, category, price, image_url } = product;
    return `<div class="col-md-4 mt-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-img-actions"><img
                                        src="${image_url}"
                                        class="card-img img-fluid" width="96" height="350" alt=""></div>
                        </div>
                        <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <h6 class="font-weight-semibold mb-2"><a href="#" class="text-default mb-2"
                                                                         data-abc="true">${name}
                                        </a></h6> <a href="#" class="text-muted" data-abc="true">${category}
                                    </a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">Rs ${price}</h3>

                            <button type="button" class="btn bg-cart"> View Details
                            </button>
                        </div>
                    </div>
                </div>`;
};